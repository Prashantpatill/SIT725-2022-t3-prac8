const express= require("express");
    const res = require("express/lib/response");
    const app= express();
    const addition= (n1,n2) => {
        return n1+n2;
    }
    const subtraction= (n1,n2) => {
        return n1-n2;
    }
    const multiplication = (n1,n2) => {
        return n1*n2;
    }
    const division= (n1,n2) => {
        if(n1==0||n2==0)
        {
            return "Cannot Divide by Zero";
        }        
        return n1/n2;
    }
    app.get("/calculator", (req,res)=>{
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        const addition_of_two_numbers = addition(n1,n2);
        const subtraction_of_two_numbers = subtraction(n1,n2);
        const multiplication_of_two_numbers = multiplication(n1,n2);
        const devision_of_two_numbers = division(n1,n2);
        res.json({
            statuscocde:200,
            AdditionValue : addition_of_two_numbers,
            SubtractionValue: subtraction_of_two_numbers,
            MulticationValue:multiplication_of_two_numbers,
            DivsionValue:devision_of_two_numbers

        }); 
    });
    const port=3040;
    app.listen(port,()=> {
        console.log("hello i'm listening to port"+port);
    })
    