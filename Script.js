function calculateTotal() {
        const prices = document.querySelectorAll('.price');
        let total = 0;

        prices.forEach(input => {
            const value = parseInt(input.value, 10);
            if (!isNaN(value)) {
                total += value;
            }
        });

        document.getElementById('total').value = total;
    }
