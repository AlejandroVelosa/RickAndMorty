import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import "./styles/residentCard.css"


const ResidentCard = ({ url }) => {

    const [resident, getApiResident] = useFetch(url)

    useEffect(() => {
        getApiResident()
    }, [])
    console.log(resident)
    return (
        <article className="resident">
            <header className="resident_header">
                <img className="resident_img" src={resident?.image} alt="" />
                <div className="resident_status">
                    <span className={`resident_cicle ${resident?.status}`}></span>
                    <span className="resident_status-value">{resident?.status}</span>
                </div>
            </header>
            <section className="resident_body">
                <h3 className="resident_name">{resident?.name}</h3>
                <hr className="resident_hr" />
                <ul className="resident_list">
                    <li className="resident_label"><span>Specie</span><span className="resident_value">{resident?.species}</span></li>
                    <li className="resident_label"><span>Origin</span><span className="resident_value">{resident?.origin.name}</span></li>
                    <li className="resident_label"><span>Eppisodes where appear</span><span className="resident_value">{resident?.episode.length}</span></li>
                    {/* <li className="resident_label"><span>Gender</span><span className="resident_value">{resident?.gender}</span></li> */}
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard