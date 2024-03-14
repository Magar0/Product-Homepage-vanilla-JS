

const toggle = () => {
    document.getElementsByClassName
}
const toggleBtn1 = document.getElementById("toggleBtn1")
const toggleBtn2 = document.getElementById("toggleBtn2")
const list1 = document.getElementById('skinCare')
const list2 = document.getElementById('hairCare')

toggleBtn1.addEventListener('click', () => {
    toggleBtn1.classList.replace('notActive', 'active')
    toggleBtn2.classList.replace('active', 'notActive')
    list1.classList.remove("d-none")
    list2.classList.add("d-none")
})
toggleBtn2.addEventListener('click', () => {
    toggleBtn2.classList.replace('notActive', 'active')
    toggleBtn1.classList.replace('active', 'notActive')
    list2.classList.remove("d-none")
    list1.classList.add("d-none")
})

