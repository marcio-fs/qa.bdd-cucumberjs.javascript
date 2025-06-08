Feature: Verificar se pessoas podem consumir bebida alcoólica

  Scenario: Pessoas maiores de 17 anos podem consumir bebida alcoólica
    Given a pessoa tem a idade de 18 anos
    When verifico se a pessoa pode consumir bebida alcoólica
    Then a resposta deve ser "Sim"

  Scenario: Pessoas menores de 17 anos não podem consumir bebida alcoólica
    Given a pessoa tem a idade de 16 anos
    When verifico se a pessoa pode consumir bebida alcoólica
    Then a resposta deve ser "Não"


    Scenario Outline: Verificar se a pessoa pode consumir bebida alcoólica
      Given a pessoa tem a idade de <idade> anos
      When verifico se a pessoa pode consumir bebida alcoólica
      Then a resposta deve ser "<resposta>"

      Examples:
        | idade | resposta |
        | 18    | Sim      |
        | 16    | Não      |
        | 17    | Não      |
        | 0     | Não      |
       #| -1    | Não      | // Validação da exception