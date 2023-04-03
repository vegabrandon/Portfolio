import { forwardRef } from "react";

const ProjectList = forwardRef((props, ref) => {
    const h1ClassNames = `text-white text-2xl text-left ml-[1em] mt-[1em]`

    return (
        <div className='flex flex-col h-[100vh]' ref={ref}>
            <div>
                <h1 className="text-white text-[6rem] h-[10rem]">Projects</h1>
            </div>
            <div className="flex-wrap flex flex-row w-[70vw] h-[90vh] m-auto justify-evenly">
                <div className="w-[25rem] h-[20rem] rounded-2xl bg-slate-400/[.2]">
                    <h1 className={h1ClassNames}>Fuzzy Friends</h1>
                </div>
                <div className="w-[25rem] h-[20rem] rounded-2xl bg-slate-400/[.2]">
                    <h1 className={h1ClassNames}>Monarch</h1>
                </div>
                <div className="w-[25rem] h-[20rem] rounded-2xl bg-slate-400/[.2]">
                    <h1 className={h1ClassNames}>Portfolio</h1>
                </div>
                <div className="w-[25rem] h-[20rem] rounded-2xl bg-slate-400/[.2]">
                    <h1 className={h1ClassNames}>Chess</h1>
                </div>
            </div>
      </div>
    )
})
export default ProjectList;