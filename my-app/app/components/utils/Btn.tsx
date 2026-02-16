import React from 'react'

const Btn = ({content}: {content: string}) => {
  return (
     <a
            href="/under-development"
            className="group flex flex-col items-center gap-2 cursor-pointer mt-12"
          >
            <span className="text-white tracking-[0.3em] font-bold  font-trajan text-sm sm:text-[16px]">
              {content}
            </span>
            <div className="w-24 h-px bg-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-[0%] transition-transform duration-500" />
            </div>
          </a>
  )
}

export default Btn


export const BtnGreen = ({content}: {content:string}) => {
    return (
             <a
              href="/under-development"
              className="group flex flex-col items-start gap-2 cursor-pointer mt-12"
             >
              <span className="text-(--green) tracking-[0.3em] font-bold font-trajan text-sm sm:text-[16px]">
                {content}
              </span>
              <div className="w-24 h-px bg-(--green)/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-(--green) -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            </a>
)
}

export const BtnGreenCenter = ({content}: {content:string}) => {
    return (
             <a
              href="/under-development"
              className="group flex flex-col items-center gap-2 cursor-pointer mt-12"
             >
              <span className="text-(--green) tracking-[0.3em] font-bold font-trajan text-sm sm:text-[16px]">
                {content}
              </span>
              <div className="w-24 h-px bg-(--green)/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-(--green) -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            </a>
)
}

export const BtnFullWhite = ({content}: {content:string}) => {
    return (
        <a
                href="/contact"
                className="inline-block py-4 px-10 border border-white text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500"
              >
                {content}
              </a>
    )
}