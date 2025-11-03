document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".faq-content")
    //console.log(content)

    content.addEventListener("click", (e) => {
        const groupHeader = e.target.closest(".faq-group-header")
        if (!groupHeader) {return}
        // console.log(groupHeader)

        const group =  groupHeader.parentElement
        const body = group.querySelector(".faq-group-body")
        const icon = group.querySelector("i")
        //console.log(group)
        //console.log(body)
        //console.log(icon)        

        icon.classList.toggle("fa-minus")
        icon.classList.toggle("fa-plus")

        body.classList.toggle("open")

        // Close other
        const allGroups = content.querySelectorAll(".faq-group")
        //console.log(allGroups)

        allGroups.forEach((a_group) => {
            if (a_group !==group) {
                const a_groupBody = a_group.querySelector(".faq-group-body")
                const a_groupIcon = a_group.querySelector("i")

                a_groupBody.classList.remove("open")
                a_groupIcon.classList.remove("fa-minus")
                a_groupIcon.classList.add("fa-plus")
            }
        })


    })
    
    const hamburgerButton = document.querySelector(".hamburger-button")
    const mobileMenu = document.querySelector(".mobile-menu")

    hamburgerButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active")
    })
})