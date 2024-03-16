import crypto from 'crypto';

export async function POST(req: Request, res: Response) {

    const data = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    try {
        const expectedSignature = crypto
            .createHmac("sha256", process.env.NEXT_APP_RAZORPAY_KEY_SECRET || "")
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;
        if (isAuthentic) {
            // Signature verified, process further
            // console.log("Signature verified");

            return new Response(JSON.stringify({ message: "Signature verified" }), {
                headers: {
                    "Content-Type": 'aplication/json'
                },
                status: 200,
            });
        } else {
            // Signature verification failed
            // console.log("Signature verification failed");
            return new Response(JSON.stringify({ message: "Signature verification failed" }), {
                headers: {
                    "Content-Type": 'aplication/json'
                },
                status: 400,
            });
        }
    } catch (error) {
        // console.log(error)
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            headers: {
                "Content-Type": 'aplication/json'
            },
            status: 500,
        });
    }
}