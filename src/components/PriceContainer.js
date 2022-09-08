import React, { useState } from 'react';
import PriceCard from './PriceCard';

const PriceContainer = () =>{
  
    const [packs,setPacks]=useState([
        {
            type:"free",
            pricePerMonth:0,
            noOfUsers:"Single User",
            usersFeature:true,
            storage:"5GB",
            storageFeature:true,
            projects:"Unlimited Public Projects",
            projectsFeature:true,
            support:"Dedicated phone support",
            supportFeature:false,
            subdomain:'Free Subdomain',
            subdomainFeature:false,
            report:'Monthly Status reports',
            reportFeature:false,
            community:"Community Access",
            communityFeature:true
        },
        {
            type:"plus",
            pricePerMonth:9,
            noOfUsers:"5 Users",
            usersFeature:true,
            storage:"50 GB",
            storageFeature:true,
            projects:"Unlimited Public Projects",
            projectsFeature:true,
            support:"Dedicated phone support",
            supportFeature:true,
            subdomain:'Free Subdomain',
            subdomainFeature:true,
            report:'Monthly Status reports',
            reportFeature:false,
            community:"Community Access",
            communityFeature:true
        },
        {
            type:"pro",
            pricePerMonth:49,
            noOfUsers:"Unlimited Users",
            usersFeature:true,
            storage:"150 GB",
            storageFeature:true,
            projects:"Unlimited Public Projects",
            projectsFeature:true,
            support:"Dedicated phone support",
            supportFeature:true,
            subdomain:'Unlimited Free Subdomains',
            subdomainFeature:true,
            report:'Monthly Status reports',
            reportFeature:true,
            community:"Community Access",
            communityFeature:true
        }

    ]);
    return (
     <div class="container">
         <div className='row  gy-5'>
            <PriceCard packs={packs}/>
         </div>
     </div>
    )
};

export default PriceContainer;