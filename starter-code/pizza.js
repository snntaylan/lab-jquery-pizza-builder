var ingredients = {
    'Pepperonni': {
        isSelected: true,
        price: 1
    },
    'Mushrooms': {
        isSelected: true,
        price: 1
    },
    'Green peppers': {
        isSelected: true,
        price: 1
    },
    'White sauce': {
        isSelected: true,
        price: 3
    },
    'Gluten-free crust': {
        isSelected: true,
        price: 5
    }
}

function calculatePrice(ingredients) {
    var price = 10
    for (var key in ingredients) {
        if (ingredients[key].isSelected) {
            price += ingredients[key].price
        }
    }
    return price
}

function render(ingredients) {
    // Display the right price
    $('aside.panel.price ul').html('')
    for (var key in ingredients) {
        if (ingredients[key].isSelected) {
            $('aside.panel.price ul').append(`<li>$${ingredients[key].price} ${key}</li>`)
        }
    }
    $('aside.panel.price strong').text('$' + calculatePrice(ingredients))

    // Add the class active only to ingredients with "isSelected"
    $('.btn').each(function () {
        var btnText = $(this).text()
        if (ingredients[btnText].isSelected) {
            $(this).addClass('active')
        }
        else {
            $(this).removeClass('active')
        }
    })
}

$(document).ready(function () {

    var classDictionnary = {
        'Pepperonni': { toggle: '.pep' },
        'Mushrooms': { toggle: '.mushroom' },
        'Green peppers': { toggle: '.green-pepper' },
        'White sauce': {
            selector: '.sauce',
            toggleClass: 'sauce-white'
        },
        'Gluten-free crust': {
            selector: '.crust',
            toggleClass: 'crust-gluten-free'
        },
    }

    $('.btn').click(function () {
        var btnText = $(this).text()

        // Changing the ingredients (state)
        ingredients[btnText].isSelected = !ingredients[btnText].isSelected

        render(ingredients)
    })
})