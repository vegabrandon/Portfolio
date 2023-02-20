
const ProjectList = () => {

    return (
        <div className='flex flex-col h-[100vh]'>
            <div>
                <h1 className="text-white text-[6rem] h-[10rem]">Projects</h1>
            </div>
            <div className="flex-wrap flex flex-row w-[70vw] h-[90vh] m-auto justify-evenly">
                <div className="w-[20rem] h-[20rem] rounded-2xl bg-slate-400/[.2] ">Fuzzy Friends</div>
                <div className="w-[20rem] h-[20rem] rounded-2xl bg-slate-400/[.2] ">Monarch</div>
                <div className="w-[20rem] h-[20rem] rounded-2xl bg-slate-400/[.2] ">Portfolio</div>
                <div className="w-[20rem] h-[20rem] rounded-2xl bg-slate-400/[.2] ">Chess</div>
            </div>
      </div>
    )
}

export default ProjectList;