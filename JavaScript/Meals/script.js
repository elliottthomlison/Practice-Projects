$.ajax({
    type: 'get',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success: function(response)
    {
        for(let i=0; i < response.meals.length; i++){
            
            let newItem = `<div class='col-md-3 m-2'>
                <p>${response.meals[i].strMeal}</p>
                <img src=${response.meals[i].strMealThumb} class="img-fluid"/>
                <p>${response.meals[i].idMeal}</p>
            </div>`

            $('#myitems').append(newItem)
        }
    },

    error: function(error) {
        console.log(error)
    }
})