import DoughnutChart from "./doughnut"

const Tokenomics=()=>{
  
  return(
    <div className="max-md:hidden box flex flex-col py-10">
    <div className="upper-text flex flex-col gap-4">
        <h1 className="font-semibold text-3xl">Tokenomics</h1>
        <p className="text-2xl font-semibold">Initial Distribution</p>
    </div>
    <DoughnutChart/>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad, earum a eum aut totam soluta! Tempore quasi qui placeat optio harum ipsum in, suscipit nulla dicta voluptatibus voluptatem iure, illum sed enim eligendi laborum animi. Iste, nihil necessitatibus! Sunt, aliquid inventore corrupti ad repudiandae sed suscipit aperiam soluta? Illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, sapiente enim nisi maiores architecto labore rem exercitationem. Saepe autem vero sunt sed possimus aut dolorum? Nisi laboriosam doloremque unde ab!</div>
    </div>
  )
}

export default Tokenomics