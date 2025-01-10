// Array to store customer data
let customers = [];

// Function to render customers in the table
function renderCustomers() {
  const customerTable = document.getElementById("customerTable").getElementsByTagName("tbody")[0];
  customerTable.innerHTML = ""; // Clear the existing table body
  
  customers.forEach((customer, index) => {
    const row = customerTable.insertRow();

    row.insertCell(0).textContent = customer.name;
    row.insertCell(1).textContent = customer.email;
    row.insertCell(2).textContent = customer.phone;

    const actionsCell = row.insertCell(3);
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editCustomer(index);
    actionsCell.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => deleteCustomer(index);
    actionsCell.appendChild(deleteBtn);
  });
}

// Function to handle form submission
document.getElementById("customerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;
  const phone = document.getElementById("customerPhone").value;

  // Add new customer
  const newCustomer = { name, email, phone };
  customers.push(newCustomer);
  
  // Clear the form fields
  document.getElementById("customerForm").reset();

  // Re-render the customer list
  renderCustomers();
});

// Function to delete a customer
function deleteCustomer(index) {
  customers.splice(index, 1);
  renderCustomers();
}

// Function to edit customer information
function editCustomer(index) {
  const customer = customers[index];
  document.getElementById("customerName").value = customer.name;
  document.getElementById("customerEmail").value = customer.email;
  document.getElementById("customerPhone").value = customer.phone;

  // Update the button text to "Update" when editing
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.textContent = "Update Customer";

  // Change form submission behavior to update the customer
  submitBtn.onclick = function() {
    customer.name = document.getElementById("customerName").value;
    customer.email = document.getElementById("customerEmail").value;
    customer.phone = document.getElementById("customerPhone").value;

    // Reset button and form after update
    submitBtn.textContent = "Add Customer";
    document.getElementById("customerForm").reset();
    renderCustomers();
    return false; // Prevent form submission
  };
}

// Initial rendering of customers (if any)
renderCustomers();
