package br.com.santander.sto.stconsumer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.santander.sto.stconsumer.model.Consumer;

@Repository
public interface ConsumerRepository extends JpaRepository<Consumer, Long>{}
