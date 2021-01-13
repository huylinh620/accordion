const ACCORDION_SELECTOR = ('.js-accordion')
const ACCORDION_ITEM_SELECTOR = '.js-accordion-item'
const ACCORDION_BUTTON_SELECTOR = '.js-accordion-button'
const ACCORDION_CONTENT = '.js-accordion-content'
const ITEM_ACTIVE_CLASS = 'accordion__item--active'
const accordion = document.querySelector(ACCORDION_SELECTOR)

const activateAccordion = (item) => {
  const itemContent = item.querySelector(ACCORDION_CONTENT)
  if (itemContent) {
    itemContent.style.maxHeight = itemContent.scrollHeight + 'px'
  }
  item.classList.add(ITEM_ACTIVE_CLASS)
}

const deactivateAccordion = (item) => {
  const itemContent = item.querySelector(ACCORDION_CONTENT)
  if (itemContent) {
    itemContent.style.maxHeight = 0
  }
  item.classList.remove(ITEM_ACTIVE_CLASS)
}

const deactiveAccordionList = (items) => {
  items.map((item) => {
    deactivateAccordion(item)
  })
}

if (accordion) {
  const accordionList = Array.prototype.slice.call(accordion.querySelectorAll(ACCORDION_ITEM_SELECTOR))
  if (accordionList.length) {
    accordionList.map((accordionItem) => {
      const itemButton = accordionItem.querySelector(ACCORDION_BUTTON_SELECTOR)
      if (itemButton) {
        itemButton.addEventListener('click', () => {
          if (accordionItem.classList.contains(ITEM_ACTIVE_CLASS)) {
            deactivateAccordion(accordionItem)
          } else {
            deactiveAccordionList(accordionList)
            console.log(accordionList)
            activateAccordion(accordionItem)
          }
        })
      }
    })
  }
}
