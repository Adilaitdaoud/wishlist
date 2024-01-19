import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// this function is dynamic function that check the hosts tble to verify the hosted domain that we checked 
export function createInvalidDomainValidator(hosts:string[]):ValidatorFn{
    return (control :AbstractControl):ValidationErrors|null =>{
        const value=control.value?.toLowerCase();
    
        if(!value){
            return null;
        }
        if(!value){
            return null;
        }
        const matches=hosts.some(host=>value.indexOf(`@${host}`)>-1);
        return matches?{invalidEmailDomain:true}:null
    }
}
