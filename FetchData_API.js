//-----Frontend-----//


async function getUsers() {
    
    try {
      const response = await fetch("http://localhost:3000/api/users");

      const data = await response.json();
      console.log(data);
      
    } catch(err) {
     console.log(err);
     
    }
}

getUsers();


//-----Backend----//


app.get("/api/users", (req, res) => {
  res.json({ message: "Hello from backend" });
});