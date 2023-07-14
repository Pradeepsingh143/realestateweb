export default function Footer(){
    const CurrentYear = new Date().getFullYear()
    const copyRightSymbol = "&copy;"
    return(
      <footer className="bg-accent">
        <div className="container py-5 text-center capitalize font-medium tracking-wide">
        <span >&copy;</span> {`Copyright ${CurrentYear}. All Rights Are Reserved By Bramble Management Group`}
        </div>
      </footer>
    )
  }