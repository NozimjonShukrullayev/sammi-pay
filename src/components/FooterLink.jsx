function FooterLink({ link }) {
  return (
    <div className="flex flex-col xs:my-0 my-4 min-w-[150px]">
      <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">{link.title}</h4>
      <ul className="list-none mt-4">{link.links.map((item, idx) => (
        <li key={item.linkName} className="mb-4"><a className="font-montserrat font-medium text-lightWhite hover:text-secondary text-[16px] leading-[27px]" target="_blank" href={item.link}>{item.linkName}</a></li>
      ))}</ul>
    </div>
  )
}

export default FooterLink;