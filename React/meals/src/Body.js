import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css'

function Body() {

    //hook
    const [items,setItems] = useState([]);

    useEffect(()=>{
        //the axios call needs a link to the api which it will pull data from
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        //two callback functions
        .then(response => {
            //then = success + whatever is inside of the response callback will be executed
            console.log(response.data.meals)

            setItems(response.data.meals)

        }).catch(error => {
           //error = failure + whatever is inside of the response callback will be executed
            console.log(error)
        })
    }, [])

    //inside the map method things will be formatted as you call them
    const itemsList = items.map((object) => {
        return <div class="col-md-4">
            <p>{object.strMeal}</p>
            <img src={object.strMealThumb} className="img-fluid"/>
            <p>
                {object.strMeal.idMeal}
            </p>
        </div>
    })

    return (
        <div>
            <div className='row'>
                {itemsList}
            </div>
        </div>
    )
}

export default Body