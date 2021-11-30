export default function validateInfo(values) {
    let errors = {};

    if(!values.name){
        errors.name = "Podaj imię"
    } else if (values.name.includes(" ")){
        errors.name = "Podane imię jest nieprawidłowe!"
    }

    if(!values.email) {
        errors.email = "Podaj email"
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Podany email jest nieprawidłowy!"
    }

    if(values.message.length < 120){
        errors.message = "Wiadomość nie może być krótsza niż 120 znaków"
    }

    return errors;
};