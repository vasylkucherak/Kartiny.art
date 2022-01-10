const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let cloud = this.classList.contains('active-style');
            hideAll();
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (cloud) {
                this.nextElementSibling.style.maxHeight = '0px';
                this.classList.toggle('active-style');
                this.nextElementSibling.classList.toggle('active-content');
            } else {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            }
        });

        function hideAll() {
            btns.forEach(botton => {
                botton.classList.toggle('active-style', false);
                botton.nextElementSibling.classList.toggle('active-content', false);
                botton.nextElementSibling.style.maxHeight = '0px';
            });
        }
    });



    //   blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;