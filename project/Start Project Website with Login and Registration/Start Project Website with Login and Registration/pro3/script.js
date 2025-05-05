function updateUI() {
    transactionList.innerHTML = "";
    let totalIncome = 0, totalExpense = 0;

    transactions.forEach((transaction, index) => {
        const li = document.createElement("li");
        li.classList.add("transaction-item", transaction.type);

        const iconSrc = transaction.type === "income" ? "images/income-icon.png" : "images/expense-icon.png";
        li.innerHTML = `
            <img src="${iconSrc}" class="icon">
            ${transaction.desc} - <span class="amount">$${transaction.amount}</span>
            <button class="delete-btn" onclick="deleteTransaction(${index})">X</button>
        `;

        transactionList.appendChild(li);

        if (transaction.type === "income") totalIncome += transaction.amount;
        else totalExpense += transaction.amount;
    });

    balanceEl.innerText = $${totalIncome - totalExpense};
    incomeEl.innerText = $${totalIncome};
    expenseEl.innerText = $${totalExpense};
    localStorage.setItem("transactions", JSON.stringify(transactions));
}