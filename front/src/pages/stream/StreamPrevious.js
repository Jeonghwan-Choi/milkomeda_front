import { React, useState, useRef, useEffect } from "react";
import "../../assets/css/Stream/StreamPrevious.css"
import filter from '../../assets/icon/graw/filter.svg'
import StageCard from '../../components/StageCard/StageCard';
import { Link } from "react-router-dom";
import StreamSort from '../../components/Popup/StreamSort'
import Topbar from '../../components/topbar/Topbar'
function StreamPrevious() {
    const dropdownRef = useRef(null);
    const curRef = useRef(true);

    const [openSort, setOpenSort] = useState(false);

    useEffect(() => {
        console.log('useEffect')
        const pageClickEvent = (e) => {
            if (curRef.current) {
                curRef.current = false;
                return;
            } else {
                curRef.current = true;
            }

            // If the active element exists and is clicked outside of
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setOpenSort(!openSort);

            }
        };

        // If the item is active (ie open) then listen for clicks
        if (openSort) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }





    }, [openSort]);
    return (
        <>
            <Topbar />
            <div className="StreamPre">
                <div className="StreamPre_Wrapper">



                    <div className="StreamPre_Top">

                        <ul className='StreamPre_Top_lf'>
                            <Link to="/stream" className="link">
                                <li className="StreamPre_Stage"><span className="StreamPre_Live">라이브</span>&nbsp;스테이지</li>
                            </Link>

                            <Link to="/streamup" className="Stream_link">
                                <li className="StreamPre_LiveStage_us">다가오는&nbsp;스테이지</li>
                            </Link>

                            <Link to="/streampv" className="Stream_link">
                                <li className="StreamPre_LiveStage_ps">지난&nbsp;스테이지</li>
                            </Link>



                        </ul>
                        <div className='StreamPre_Top_Rh'>
                            <div className="Stream_LiveStage_filter">
                                <img className="Stream_LiveStage_filterIcon" src={filter} alt="filter" />
                                <button className='Stream_LiveStage_filter_text' onClick={() => {
                                    setOpenSort(!openSort)
                                    curRef.current = true;
                                }}>
                                    정렬
                                </button>

                                <nav
                                    ref={dropdownRef}
                                    className={`Stream_menus ${openSort ? "active" : "inactive"}`}
                                >
                                    <StreamSort />
                                </nav>

                            </div>
                        </div>



                    </div>


                    <div className='StreamPre_btm'>
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />
                    </div>

                    {/* <div className="StreamPre_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamPre_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamPre_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamPre_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div> */}






                </div>
            </div>
        </>
    )
}

export default StreamPrevious