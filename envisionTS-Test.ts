 //import { OntologyEditFunction, Function, LocalDate } from "@foundry/functions-api";
import { Function } from "@foundry/functions-api"

// Uncomment the import statement below to start importing object types
 import { LocalDate } from "@foundry/functions-api/dist";
import { Objects, ObjectSet, Airman, _ibWriteBacksJetteTable1 } from "@foundry/ontology-api";


export class IronBendersFunctions {



// Creates PDF, will be passed the list of airmen in UGT from the Workshop app
    @Function()
    public IbMain(listOfOjtMembers: ObjectSet<Airman>) :string {
        return listOfOjtMembers.all()[0].trainingStatus!;
    }

    //This needs to be finished once DET is fixed, this function will calculate time in training
    /*@Function()
    public ibTimeInTraining(exampleAirman:Airman) :string {
        return exampleAirman.trainingStatus!;
    }
    */
   
   //For testing this is using the Date arrived Station property
    @Function()
    public ibExcessiveTraining(dateArrived:Airman = 2007-12-24) :LocalDate {
      
       
        return dateArrived.dateArrivedStation!;
       
    }

    for ( let i = this.IbMain, i )


    subYears({ date, years }: { date: Date; years: number; }): Date {
        date.setDate(date.getDate() - years);
        return date;
    }

    @Function()
    public ibTrngCalc(ibExcessiveTraining: LocalDate) :LocalDate{
        var f: any  = new Date(f.minusYears(2))
        let months24:boolean = false
        if (ibExcessiveTraining <= this.subYears ){
            months24 = true
        }
      
    }

//template for helper function for grabbing properties from Airman/Guardian

    @Function()
    public ibTSC(exampleAirman:Airman) :string {
        return exampleAirman.trainingStatus!;
    }
    
    @Function()
    public ibPafsc(exampleAirman:Airman) :string {
        return exampleAirman.primaryAfsc5Digit!;
    }



 //template for pulling data that is input into the Workshop app
    @Function()
    public ibCdcData(cdcInfoObj:_ibWriteBacksJetteTable1) :string {
        return cdcInfoObj.cdcData!;
    }
//pulls remarks for each member in the loop 
    @Function()
    public ibOjtRemarks(ojtRemarksObj:_ibWriteBacksJetteTable1) :string {
        return ojtRemarksObj.comment_!;
    }   

    @Function()
    public ibCoreTasks(ojtCoreTasksObj:_ibWriteBacksJetteTable1) :string {
        return ojtCoreTasksObj.coreTasks!;
    }   

}




