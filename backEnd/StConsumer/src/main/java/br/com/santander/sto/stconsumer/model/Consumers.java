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
public class Consumers {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;
	private Integer grupoempresarialid;
	private Integer documento;
	private String nome;
	private String atividadeeconomica;
	private String email;
	private String telefone;
	private String status;
	private String responsavel;
	private String natureza;
}
