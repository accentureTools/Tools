package br.com.santander.sto.stconsumer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
public class GrupoEmpresarial{
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;
	private Integer matriz;
	private String filial;
	private String sucursal;
	private String status;
}
