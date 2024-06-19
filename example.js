//U20452568

// Function to load data from the CSV file and display it
d3.csv("data/purchase_orders.csv").then(function(data) {
    var ul = d3.select("#purchase-orders");

    data.forEach(function(d) {
        ul.append("li")
          .text(d.customerName + " - Order ID: " + d.orderId + ": " + d.purchaseAmount);
    });
}).catch(function(error) {
    console.error('Error loading or parsing data:', error);
});
