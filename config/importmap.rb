# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin "@kurkle/color", to: "@kurkle--color.js" # @0.3.4

pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/javascript/vendors", under: "vendors"

pin "main", to: "main.js"
pin "flatpickr-init", to: "flatpickr-init.js"
