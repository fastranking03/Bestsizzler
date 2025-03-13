import React, { useState, useRef, useEffect } from "react"

const TabsLgBasic = () => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 2, 
  })

  const wrapperRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) { 
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (tabSelected.currentTab < tabSelected.noTabs) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          })
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          })
        }
      }
    }

    if (e.keyCode === 37) { 
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (tabSelected.currentTab > 1) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          })
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          })
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <section className="max-w-full" aria-multiselectable="false">
      <ul className="flex items-center border-b border-slate-200" role="tablist" ref={wrapperRef}>
      
        {["Description", "Reviews (0)"].map((tab, index) => (
          <li key={index} role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300  hover:stroke-[#da0025] f focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === index + 1
                  ? "font-[600] text-[20px] border-[#DA0025] stroke-[#DA0025] text-black hover:border-[#DA0025] hover:text-black focus:border-[#DA0025] focus:stroke-[#da0025] focus:text-black disabled:border-slate-500"
                  : "font-[600] text-[20px] justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-[#DA0025] hover:text-black focus:border-[#da0025] focus:stroke-[#DA0025] focus:text-black disabled:text-slate-500"
              }`}
              role="tab"
              aria-selected={tabSelected.currentTab === index + 1 ? "true" : "false"}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: index + 1 })}
            >
              <span>{tab}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="">
        {["Description", "Reviews (0)"].map((tab, index) => (
          <div
            key={index}
            className={`px-6 py-4 ${tabSelected.currentTab === index + 1 ? "" : "hidden"}`}
            id={`tab-panel-${index + 1}a`}
            aria-hidden={tabSelected.currentTab === index + 1 ? "false" : "true"}
            role="tabpanel"
            aria-labelledby={`tab-label-${index + 1}a`}
            tabindex="-1"
          >
            <p>
              {tab === "Description"
                ? "This is the description content. You can add details about the product here, such as features, specifications, and benefits."
                : "This is the review section where customers can leave their feedback, comments, and ratings for the product."}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TabsLgBasic
