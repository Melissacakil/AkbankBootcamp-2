

  var btn = document.createElement("BUTTON");
  btn.innerHTML = "New Button";

  let customers = [];

  function appendButton(){
    
      let customer = {
      Name :document.getElementById("formCustomerName").value,
      Surname :document.getElementById("formCustomerSurname").value,
      Balance : parseInt(document.getElementById("formCustomerBalance").value),
      AcountState :"",
      };
      
      customers.push(customer)
      let table = '<table border="1">';
      table += `<tr><th>Ad Soyad</th><th>Bakiye</th><th>Ürün</th></tr>`;
      
      var button = document.createElement("button");
      button.innerHTML = "Do Something";
      customers.forEach((e) => {
        table = table + `<tr>`;
        table = table + `<td>${e.Name+e.Surname}</td>`;
        table = table + `<td>${e.Balance}</td>`;
        table = table + `<td><button class="btn btn-primary btn-sm" type="submit">Ürünleri Göster</button></td>`;
        table = table + `<td><button class = "btn btn-secondary btn-sm" type="submit">Hesap Hareketleri</button></td>`;
        table += `</tr>`;
     });
       table += "</table>";
       document.getElementById("customer-list").innerHTML = table;
  };

  


  var products = [];

  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Product_Button";

  function appendProduct_Button(){
    var Product_List = {
        ProductName: document.getElementById("formProductName").value,
        ProductPrice : parseInt(document.getElementById("formProductPrice").value),
        ProductBalance: parseInt(document.getElementById("formProductNumber").value),
        ProductAcountState: "",
      };
      products.push(Product_List);
      console.log(products);
    // document.getElementById("container").appendChild(btn);
  };
