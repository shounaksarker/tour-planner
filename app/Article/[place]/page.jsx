import { Article } from '@/components/article/Article'
import {sundarbans, srimangal, sajekValley, rangamati, dhaka, kuakataBeach, ratnodweepIsland, bandarban, coxsBazarSeaWorld, saintMartinsIsland} from '@/components/Utils/ArticleData'
import React from 'react'

const page = ({ params }) => {
  return (
    <div>
        {
            params.place === "sundarbans" ? <Article data={sundarbans}/> :
            params.place === "srimangal" ? <Article data={srimangal}/> :
            params.place === "sajekValley" ? <Article data={sajekValley}/> :
            params.place === "rangamati" ? <Article data={rangamati}/> :
            params.place === "dhaka" ? <Article data={dhaka}/> :
            params.place === "kuakataBeach" ? <Article data={kuakataBeach}/> :
            params.place === "ratnodweepIsland" ? <Article data={ratnodweepIsland}/> :
            params.place === "bandarban" ? <Article data={bandarban}/> :
            params.place === "coxsBazarSeaWorld" ? <Article data={coxsBazarSeaWorld}/> :
            params.place === "saintMartinsIsland" ? <Article data={saintMartinsIsland}/> :
            <div className="flex items-center justify-center min-h-[200px]">
                <h1 className="text-4xl font-bold text-red-800">No Data Found......</h1>
            </div>
        }
    </div>
  )
}

export default page