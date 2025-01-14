//getting routes from server
fetch("https://hackdiversity.xyz/api/test/mockRoutes", {
    method: "GET",
    headers: {
      "Authorization": "Bearer ccbb4b7a-4853-412d-ac35-c3b80d92fc94"
    }
  })
  
  .then(response => response.json())
    .then(data => {
        //filtering out inaccessible routes
        let filtered = data.filter((route) => route.accessible == true);
        bubbleSort(filtered);
        console.log(filtered);
        //sending filtered data back to server
        fetch("https://hackdiversity.xyz/api/navigation/sorted_routes", {
            method: "POST",
            body: JSON.stringify(filtered),
            headers: {
              "Authorization": "Bearer ccbb4b7a-4853-412d-ac35-c3b80d92fc94",
              "Content-type": "application/json; charset=UTF-8"
            }
          })
    });

//sorting distance from lowest to highest
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].distance > arr[j + 1].distance) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }


  