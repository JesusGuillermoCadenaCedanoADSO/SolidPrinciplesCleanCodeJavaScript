(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    // function isRedFruit( fruit: string ): boolean {
        
    //     if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    function isRedFruit( fruit: string ): boolean {
        const red_fruits = ['manzana', 'cereza', 'ciruela']
		if (red_fruits.includes(fruit)) return true;
        return false
    }
    //solcion del profesor:
    function isRedFruit_2( fruit: string ): boolean {
        const red_fruits = ['manzana', 'cereza', 'ciruela']
		return red_fruits.includes(fruit);
        
    }
    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    // function getFruitsByColor( color: string ): string[] {

    //     if ( color === 'red' ) {
    //         return ['manzana','fresa'];
    //     } else if ( color === 'yellow') {
    //         return ['piña','banana'];
    //     } else if ( color === 'purple') {
    //         return ['moras','uvas']
    //     } else {
    //         throw Error('the color must be: red, yellow, purple');
    //     }
    // }

    function getFruitsByColor( color: string ): string[] {
        switch(color){
            case 'red':
                return ['manzana','fresa'];
            case 'yellow':
                return ['piña','banana'];
            case 'purple':
                return ['moras','uvas']
            default:
                throw Error('the color must be: red, yellow, purple');
        }
        
    }
    //solucion del profesor
    type FruitColor = 'red'|'yellow'|'purple';
    function getFruitsByColor_2(color: FruitColor): string[]{
        // objeto literal
        const fruitsByColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple:['moras','uvas']
        };
        //validacion
        if (!Object.keys(fruitsByColor).includes(color)) {
            throw Error('the color must be: red, yellow, purple');
        }
        return fruitsByColor[color];

    }

    // Simplificar esta función
    // let isFirstStepWorking  = true;
    // let isSecondStepWorking = true;
    // let isThirdStepWorking  = true;
    // let isFourthStepWorking = true;

    // function workingSteps() {
    //     if( isFirstStepWorking === true ) {
    //         if( isSecondStepWorking === true ) {
    //             if( isThirdStepWorking === true ) {
    //                 if( isFourthStepWorking === true ) {
    //                     return 'Working properly!';
    //                 }
    //                 else {
    //                     return 'Fourth step broken.';
    //                 }
    //             }
    //             else {
    //                 return 'Third step broken.';
    //             }
    //         }
    //         else {
    //             return 'Second step broken.';
    //         }
    //     }
    //     else {
    //         return 'First step broken.';
    //     }
    // }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;
    
    const Is_steps_working = [	isFirstStepWorking,
                                isSecondStepWorking,
                                isThirdStepWorking,
                                isFourthStepWorking
                            ]
    function broken_steps_number_to_string(step_number:number):string{
        switch(step_number){
            case 0:
                return "First step broken.";
            case 1:
                return "Second step broken.";
            case 2:
                return "Third step broken.";
            case 3:
                return "Fourth step broken.";
            default:
                throw Error('Unknown step');
        }
    }
    
    function workingSteps() {
        let fLen = Is_steps_working.length;
        
        for (let i = 0; i < fLen; i++) {
          if (!Is_steps_working[i]) return broken_steps_number_to_string(i);
        }
        return 'Working properly!';
        
    }
    //solucion del profesor
    function workingSteps_2(){
        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking) return 'First step broken.';
        if (!isThirdStepWorking) return 'First step broken.';
        if (!isFourthStepWorking) return 'First step broken.';
        return 'Working properly';

    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();





