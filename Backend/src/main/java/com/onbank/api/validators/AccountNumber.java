package com.onbank.api.validators;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = AccountNumberValidator.class)
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface AccountNumber {
    String message() default "Invalid account number";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
