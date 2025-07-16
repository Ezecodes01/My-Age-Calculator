document.getElementById('calculate-btn').addEventListener('click', function() {
    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10) - 1; // JS months are 0-based
    const year = parseInt(document.getElementById('year').value, 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Please enter a valid date.');
        return;
    }

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result-years').value = years;
    document.getElementById('result-months').value = months;
    document.getElementById('result-days').value = days;
});