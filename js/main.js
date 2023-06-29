function show_elem(list) {
    list.forEach(function(item, index, array) {
      var elements = document.querySelectorAll(item);
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', function() {
          var hiddenElement = this.querySelector('#feedback'); // Замените .hidden-element на селектор вашего скрытого элемента
          if (hiddenElement) {
            hiddenElement.style.display = 'block';
          }
        });
  
        elements[i].addEventListener('mouseout', function() {
          var hiddenElement = this.querySelector('#feedback'); // Замените .hidden-element на селектор вашего скрытого элемента
          if (hiddenElement) {
            hiddenElement.style.display = 'none';
          }
        })
      }
    });
  }

  var divList = ['.contact-div']; // Замените классы .div-class-1 и .div-class-2 на соответствующие селекторы ваших div-элементов

  show_elem(divList);