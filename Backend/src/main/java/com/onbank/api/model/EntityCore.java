package com.onbank.api.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.envers.Audited;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@MappedSuperclass
@EqualsAndHashCode
@EntityListeners(AuditingEntityListener.class)
public abstract class EntityCore {
    @Id
    @Column(name = "id", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Audited
    @CreatedDate
    @Column(name = "createdate", nullable = false, updatable = false)
    private LocalDateTime createDate;

    @Audited
    @LastModifiedDate
    @Column(name = "lastmodified", nullable = false)
    private LocalDateTime lastModified;
}
