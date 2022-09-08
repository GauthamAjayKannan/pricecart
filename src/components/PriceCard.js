import React from "react";
import './pricecard.css';


const PriceCard = ({packs}) =>{
    return <>
    {packs.map(pack=>{
        return (<div className="col-lg-4">
            <div className="card">
                <h5 className="type">{pack.type}</h5>
                <p><h1 className="price">${pack.pricePerMonth}</h1>/month</p>
                <hr/>
                <div className="features-list">
                    <p className={pack.usersFeature?"enable":"disable"}>
                        <span className={pack.usersFeature?"fa fa-check":"fa fa-times"}></span> 
                        {pack.noOfUsers}
                    </p>
                    <p className={pack.storageFeature?"enable":"disable"}>
                        <span className={pack.storageFeature?"fa fa-check":"fa fa-times"}></span>
                         {pack.storage}
                    </p>
                    <p className={pack.projectsFeature?"enable":"disable"}>
                        <span className={pack.projectsFeature?"fa fa-check":"fa fa-times"}></span>
                         {pack.projects}
                    </p>
                    <p className={pack.projectsFeature?"enable":"disable"}>
                        <span className={pack.projectsFeature?"fa fa-check":"fa fa-times"}></span>
                         {pack.projects}
                    </p>
                    <p className={pack.communityFeature?"enable":"disable"}>
                        <span className={pack.communityFeature?"fa fa-check":"fa fa-times"}></span>
                         {pack.community}
                    </p>
                    <p className={pack.subdomainFeature?"enable":"disable"}>
                        <span className={pack.subdomainFeature?"fa fa-check":"fa fa-times"}></span>
                         {pack.subdomain}
                    </p>
                    <p className={pack.reportFeature?"enable":"disable"}>
                        <span className={pack.reportFeature?"fa fa-check":"fa fa-times"}></span>
                         {pack.report}
                    </p>
                </div>
                
                <button className="pack-button">Choose</button>
            </div>
        </div>
   ) })}</>
}


export default PriceCard;