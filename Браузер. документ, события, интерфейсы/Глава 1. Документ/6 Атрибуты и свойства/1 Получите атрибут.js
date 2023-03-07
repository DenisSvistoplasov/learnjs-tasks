// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// <!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
      /* your code */

    const div = document.querySelector('[data-widget-name="menu"]');
    div.dataset.widgetName;
      
  </script>
</body>
</html>