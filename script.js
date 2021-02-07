const search = document.getElementById('search')
const submit = document.getElementById('submit');
const meals = document.getElementById('meals');
const heading = document.getElementById('heading');
const mealsDiv= document.getElementById('mealsDiv')

//submit.addEventListener('click', searchMeal)


function searchMeal() {
//   e.preventDefault();
  heading.innerHTML = "";
  const searchValue = search.value;
  console.log(searchValue);
  if (searchValue.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        heading.innerHTML = `<h2 class="text-center" >Search results for '${searchValue}':</h2>`;
        if (data.meals === null) {
          heading.innerHTML = `<h2 class="text-center">There are no such meal as '${searchValue}'. Try again!</h2>`;
        } else {
          meals.innerHTML = data.meals.map((meal) => `
          
            <div class="meal" onclick="mealInfo('${meal.strMeal}')">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h5 class="text-center">${meal.strMeal}</h5>
                </div>
            </div> `
            )
            .join("");
        }
      });
    search.value = "";
  } else {
    alert("Please enter your favorite item");
  }
}
submit.addEventListener("click", searchMeal);

// mealsDiv.addEventListener('click', function(event){
//     //console.log('clicked')

// })
const mealInfo = name =>{
    
   const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name.idMeal}`
    console.log(url)

}


