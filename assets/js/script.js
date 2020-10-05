// Открытие мпопап окна  формой
function bindModal(triggerSelector, modalSelector, closeSelector) { 
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    trigger.forEach( item => {
        item.addEventListener('click', (e) => {
            // if (e.target) {
            //     e.preventDefauld();
            // }
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            // document.body.style.marginRight = `${scroll}px`;
            // document.body.classList.add('');
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('');
        document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('');
            // document.body.style.marginRight = `0px`;
        }
    })
};
bindModal('.callback__btn','.modal','.modal__wrapp-close');

// Обработка формы, AJAX
$('.callback-form').on("click", ".callback-form__btn", function(e) {
    e.preventDefault();

    let dataForm = $('.callback-form').serialize();
    const email = document.querySelector('#callback-email'),
        phone = document.querySelector('#callback-phone'),
        message = document.querySelector('#callback-text'),
        btnForm = document.querySelector('.callback-form__btn'),
        inputs = document.querySelectorAll('.callback-form input');


       
        document.querySelectorAll('.callback-form input').forEach(elem => {
            elem.classList = '';
        });

        const emailValue = email.value.trim(),
            phoneValue = phone.value.trim(),
            messageValue = message.value.trim();

        if ( emailValue.indexOf('@') < 0 ) {
            email.classList.add('error-data');
        } else {
            email.classList.add('success-data');
        }

        if ( phoneValue === '') {
            phone.classList.add('error-data');
        } else {
            phone.classList.add('success-data');
        }

        // const sendformData = () => {
        //     console.log(dataForm);
        //     $.ajax({
        //         url: './config/email-form.php',
        //         type: "POST",
        //         data: dataForm,
        //         beforeSend: function () { 

        //         },
        //         success: function () {

        //         }
        //     });
        // }


        
    

})