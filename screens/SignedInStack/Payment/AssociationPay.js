import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';

export default function AssociationPay({navigation}) {
  return (
    <View style={{ flex: 1 }}>
    
      <Paystack  
        paystackKey="pk_live_88e62d42bfe1d542ba1c33be65c8b9be992ad4f1"
        amount={'100.00'}
        billingEmail="adejobimujeeb5@gmaill.com"
        billingMobile="08123456789"
        billingName="Mujeeb Adejobi"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
            navigation.goBack()
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={true}
      />
    </View>
  );
}


// pk_test_d094eff3b3321fbb73862961d218fd9dda1cec53