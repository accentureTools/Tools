package br.com.santander.sto.stconsumer.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.santander.sto.stconsumer.model.Consumers;
import br.com.santander.sto.stconsumer.repository.ConsumerRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/consumers")
@AllArgsConstructor
public class ConsumerController {
    @Autowired
    private ConsumerRepository consumerRepository;

    @GetMapping
    public ArrayList<Consumers> list(){
    	List<Consumers> consumerList = consumerRepository.findAll();
    	ArrayList<Consumers> arrList = new ArrayList<Consumers>();
    	for (Consumers consumer : consumerList) {
    		
//    		Consumers item = new Consumers();
//    		item.set()
    		System.out.println(consumer.toString());	

    		arrList.add(consumer);
		}
    	return arrList;
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Consumers create(@RequestBody Consumers consumer) {
        return consumerRepository.save(consumer);
    }

    @RequestMapping(value = "/edit/{id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<Consumers> GetById(@PathVariable(value = "id") Long id){

        Optional<Consumers> oldRegister = consumerRepository.findById(id);
        if(oldRegister.isPresent()){

            Consumers consumer = oldRegister.get();
            return new ResponseEntity<Consumers>(consumer, HttpStatus.OK);

        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @RequestMapping(value = "/deleteById/{id}", method = RequestMethod.POST, produces = "application/json")
    public Boolean deleteById(@PathVariable(value = "id") Long id){
        Optional<Consumers> oldRegister = consumerRepository.findById(id);
        if (oldRegister != null) {
            this.consumerRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
