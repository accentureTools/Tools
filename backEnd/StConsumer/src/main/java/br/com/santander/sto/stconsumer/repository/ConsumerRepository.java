package br.com.santander.sto.stconsumer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.santander.sto.stconsumer.model.Consumers;

@Repository
public interface ConsumerRepository extends JpaRepository<Consumers, Long>{}
