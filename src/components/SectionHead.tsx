const SectionHead = ({ title, para }: sectionProps) => {
  return (
    <div className="text-center uppercase tracking-wider pb-5">
      <p className="text-md text-container">{para ? para : ''}</p>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-2 ">{title ? title : ''}</h1>
    </div>
  )
}

export default SectionHead
