package com.onbank.api.transformer;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import org.springframework.beans.BeanUtils;

public class TransferTransformer {

   /* private TransferDto convertToDto(Transfer transfer) {
        TransferDto transferDto = modelMapper.map(transfer, TransferDto.class);
        transferDto.setSubmissionDate(transfer.getSubmissionDate(),
                userService.getCurrentUser().getPreference().getTimezone());
        return transferDto;
    }

    private Transfer convertToEntity(TransferDto transferDto) throws ParseException {
        Transfer transfer = modelMapper.map(transferDto, Transfer.class);
        transfer.setSubmissionDate(transferDto.getSubmissionDateConverted(
                userService.getCurrentUser().getPreference().getTimezone()));

        if (transferDto.getId() != null) {
            Transfer oldPost = postService.getPostById(transferDto.getId());
            transfer.setRedditID(oldPost.getRedditID());
            transfer.setSent(oldPost.isSent());
        }
        return transfer;
    }*/

    public TransferDto convertToDto(Transfer transfer){
        TransferDto transferDto = new TransferDto();
        BeanUtils.copyProperties(transfer, transferDto);
        return transferDto;
    }

    public Transfer convertToEntity(TransferDto transferDto){
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(transferDto, transfer);
        return transfer;
    }
}
