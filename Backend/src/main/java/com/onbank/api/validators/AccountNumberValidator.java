package com.onbank.api.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.math.BigDecimal;

public class AccountNumberValidator implements ConstraintValidator<AccountNumber, String> {

    private final String P = "25";
    private final String L = "21";

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        if (s != null) {
            // Check number length
            if (s.length() >= 26 && s.length() <= 28) {
                String replaced = s.substring(4) + P + L + s.substring(2, 4);
                BigDecimal accAsNum = new BigDecimal(replaced);

                if (accAsNum.remainder(new BigDecimal(97)).equals(new BigDecimal("1"))){
                    return true;
                }
            }
        }
        return false;
    }
}
