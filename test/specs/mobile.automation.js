describe('Open Mobile Application', () => {
    it('Open Diet Meal and Input Data Name, Weight, Height, Gender', async () => {
        //input user detail name
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_name']").click();
        const element = $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_name']");
        await element.setValue('Devy Nur Sadiah');
        //input user detail weight
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']").click();
        const element2 = $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']");
        await element2.setValue('49');
        //input user detail height
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']").click();
        const element3 = $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']");
        await element3.setValue('154');
        //select radio button gender and action next
        await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_famale']").click();
        await driver.hideKeyboard();
        await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_next']").click();
        
        
    })
    
    it('Select Formulir Daily Activity', async () => {
        await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_low_to_medium']").click();
        await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_finish']").click();
    })
})

