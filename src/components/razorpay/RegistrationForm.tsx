"use client"
import { Suspense, useEffect, useState } from 'react';
import Register from './Register';
import Loading from '../Loading';
import { useRouter } from 'next/navigation';
import Razorpay from 'razorpay';

interface Player {
    name: string;
    email: string;
}

const TeamRegistrationForm = () => {
    const [teamLogo, setTeamLogo] = useState<File | string>('');
    const [teamName, setTeamName] = useState<string>('');
    const [leaderName, setLeaderName] = useState<string>('');
    const [leaderEmail, setLeaderEmail] = useState<string>('');
    const [leaderMobile, setLeaderMobile] = useState<string>('');
    const [playerDetails, setPlayerDetails] = useState<Player[]>([{ name: '', email: '' }]);
    const router = useRouter()
    useEffect(() => {
        const loadRazorpay = async () => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
        };

        loadRazorpay();
    }, []);


    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newPlayers = [...playerDetails];
        newPlayers[index] = {
            ...newPlayers[index],
            [name]: value,
        };
        setPlayerDetails(newPlayers);
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setTeamLogo(e.target.files[0]);
        }
    };
    const handleAdd = () => {
        setPlayerDetails([...playerDetails, { name: '', email: '' }]);
    };

    const handleRemove = (index: number) => {
        const newRegistrations = [...playerDetails];
        newRegistrations.splice(index, 1);
        setPlayerDetails(newRegistrations);
    };

    const makePayment = async ({ productId = null }: { productId?: string | null }) => {
        // "use server"
        const key = process.env.NEXT_APP_RAZORPAY_KEY_ID;
        console.log(key);
        // Make API call to the serverless API
        const data = await fetch("http://localhost:3000/api/razorpay");
        const { order } = await data.json();
        console.log(order.id);
        const options = {
            key: key,
            name: "Timex-Esports",
            currency: order.currency,
            amount: order.amount,
            order_id: order.id,
            description: "Understanding RazorPay Integration",
            handler: async function (response: any) { // Using 'any' as a generic type for response
                // if (response.length==0) return <Loading/>;
                console.log(response);
                const data = await fetch("http://localhost:3000/api/paymentverify", {
                    method: "POST",
                    // headers: {
                    //   // Authorization: 'YOUR_AUTH_HERE'
                    // },
                    body: JSON.stringify({
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                    }),
                });

                const res = await data.json();

                console.log("response verify==", res)

                if (res?.message == "success") {
                    console.log("redirected.......")
                    router.push("/paymentsuccess?paymentid=" + response.razorpay_payment_id)
                }
            },
            prefill: {
                name: "Timex-Esports",
                email: "esportsnandurbar@gmail.com",
                contact: "7350703785",
            },
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response: any) {
            alert("Payment failed. Please try again. Contact support for help");
        });
    };


    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     console.log({
    //         players: playerDetails, team: {
    //             teamLogo,
    //             teamName,
    //             leaderName,
    //             leaderEmail,
    //             leaderMobile
    //         }
    //     });

    //     // Handle form submission here
    // };

    return (
        <form className="w-full flex flex-col mx-auto my-8 bg-zinc-900 p-5 text-sm justify-items-center">
            <div className='w-full md:w-[320px]'>
                <p className='block card-heading mb-4 text-center'>Team Details</p>
                <div className="mb-4 rounded border p-4 text-zinc-200 border-container">
                    <label htmlFor="teamLogo" className="block mb-2">
                        Team Logo
                    </label>
                    <input
                        type="file"
                        id="teamLogo"
                        onChange={handleImageChange}
                        className="p-2 mb-2 border border-container bg-none rounded w-full outline-none"
                    />
                    <label htmlFor="teamName" className="block mb-2">
                        Team Name
                    </label>
                    <input
                        type="text"
                        id="teamName"
                        value={teamName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTeamName(e.target.value)}
                        className="p-2 mb-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                        required
                    />
                    <label htmlFor="leaderName" className="block mb-2">
                        Leader Name
                    </label>
                    <input
                        type="text"
                        id="leaderName"
                        value={leaderName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLeaderName(e.target.value)}
                        className="p-2 mb-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                        required
                    />
                    <label htmlFor="leaderEmail" className="block mb-2">
                        Leader Email
                    </label>
                    <input
                        type="email"
                        id="leaderEmail"
                        value={leaderEmail}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLeaderEmail(e.target.value)}
                        className="p-2 mb-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                        required
                    />
                    <label htmlFor="leaderMobile" className="block mb-2">
                        Leader Mobile
                    </label>
                    <input
                        type="tel"
                        id="leaderMobile"
                        value={leaderMobile}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLeaderMobile(e.target.value)}
                        className="p-2 mb-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                        required
                    />
                </div>
            </div>
            <div className="mb-4 w-full items-center flex flex-col">
                <label className="block mb-4 card-heading">Players Details</label>
                <div className='grid md:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:text-center lg:gap-5 justify-items-center h-full w-full'>
                    {playerDetails.map((player, index) => (
                        <div key={index} className="mb-4 w-full md:max-w-[320px] border border-container rounded p-4 lg:w-[300px]">
                            <p className='pb-2 mb-2 border-b border-container '>Player {index + 1}</p>
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={player.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(index, e)}
                                className="p-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                                required
                            />
                            <label className="block mb-2 mt-4">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={player.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(index, e)}
                                className="p-2 bg-zinc-800 outline-none rounded w-full border-b border-container"
                                required
                            />
                            {playerDetails.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => handleRemove(index)}
                                    className="mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                {playerDetails.length <= 3 && <button
                    type="button"
                    onClick={handleAdd}
                    className="btn-primary"
                >
                    Add Player
                </button>}
                {playerDetails.length === 4 && <Suspense fallback={<Loading />}>
                    <Register makePayment={makePayment} />
                </Suspense>}
            </div>
        </form>
    );
};

export default TeamRegistrationForm;

