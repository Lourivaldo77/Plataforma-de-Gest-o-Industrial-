# Plataforma de Gestão Industrial, Cibersegurança, Automação e Inteligência Artificial

## &#x20;Descrição do Projecto

Este projecto consiste no desenvolvimento de uma plataforma que integra a gestão industrial, a cibersegurança, a automação de processos e a inteligência artificial num único sistema.

A plataforma pretende facilitar a gestão de equipamentos, o acompanhamento das actividades de manutenção, a monitorização de eventos de segurança e a automatização de tarefas, utilizando a inteligência artificial para apoiar a análise de informações e a tomada de decisões.

## Objectivos

- Melhorar a gestão e o acompanhamento dos equipamentos industriais.
- Facilitar a identificação e o acompanhamento de incidentes de cibersegurança.
- Automatizar tarefas repetitivas através de regras predefinidas.
- Utilizar inteligência artificial para analisar informações e apoiar decisões.
- Centralizar informações operacionais e de segurança numa única plataforma.

## Benefícios para o Mercado Angolano

- **Eficiência operacional:** melhorar a organização das actividades de manutenção e reduzir falhas.
- **Segurança digital:** facilitar a monitorização de eventos e a gestão de incidentes.
- **Redução de custos:** diminuir o trabalho manual e melhorar a utilização dos recursos.
- **Apoio à decisão:** fornecer informações úteis para decisões mais rápidas e fundamentadas.
- **Modernização industrial:** incentivar a adopção de tecnologias digitais nos sectores do petróleo e gás, da energia, da mineração e da indústria transformadora em Angola.

## Requisitos Funcionais

| Código | Requisito                                                                                |
| ------ | ---------------------------------------------------------------------------------------- |
| RF01   | Permitir o registo, a autenticação e a gestão de utilizadores.                           |
| RF02   | Controlar o acesso às funcionalidades de acordo com as permissões.                       |
| RF03   | Permitir o registo e a gestão de equipamentos industriais.                               |
| RF04   | Permitir a gestão de tarefas e planos de manutenção.                                     |
| RF05   | Recolher, consultar e organizar eventos de cibersegurança.                               |
| RF06   | Permitir a gestão de alertas e incidentes de segurança.                                  |
| RF07   | Permitir a criação e execução de automações baseadas em regras.                          |
| RF08   | Utilizar inteligência artificial para analisar informações e apoiar decisões.            |
| RF09   | Apresentar indicadores operacionais e de segurança num painel de controlo (*dashboard*). |
| RF10   | Registar as principais acções dos utilizadores e das automações para auditoria.          |

## Requisitos Não Funcionais

| Código | Requisito                                                                                            |
| ------ | ---------------------------------------------------------------------------------------------------- |
| RNF01  | Proteger os dados e as credenciais dos utilizadores.                                                 |
| RNF02  | Garantir que cada utilizador acede apenas às funcionalidades autorizadas.                            |
| RNF03  | Disponibilizar uma interface simples, intuitiva e adaptável a diferentes ecrãs.                      |
| RNF04  | Garantir um bom desempenho nas operações comuns.                                                     |
| RNF05  | Assegurar a integridade e a fiabilidade dos dados.                                                   |
| RNF06  | Utilizar uma arquitectura modular que facilite a manutenção e a expansão.                            |
| RNF07  | Ser adequado a computadores com recursos limitados.                                                  |
| RNF08  | Permitir o funcionamento das funcionalidades essenciais quando o serviço de IA estiver indisponível. |
| RNF09  | Disponibilizar registos de erros e mecanismos de cópia de segurança e recuperação.                   |
| RNF10  | Impedir acções não autorizadas e proteger os sistemas industriais contra intervenções indevidas.     |

## Regras de Negócio

| Código | Regra                                                                                                                                    |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| RN01   | Cada utilizador deve possuir credenciais próprias para aceder ao sistema.                                                                |
| RN02   | Cada utilizador só pode executar operações permitidas pelo seu perfil de acesso.                                                         |
| RN03   | Cada equipamento deve possuir um identificador único.                                                                                    |
| RN04   | As tarefas de manutenção devem estar associadas aos respectivos equipamentos.                                                            |
| RN05   | Os eventos de segurança devem ser analisados antes de serem classificados como incidentes confirmados.                                   |
| RN06   | Os alertas devem apresentar informações que permitam a sua análise e acompanhamento.                                                     |
| RN07   | As automações só podem executar acções previamente definidas e autorizadas.                                                              |
| RN08   | As acções críticas devem exigir aprovação humana antes da execução.                                                                      |
| RN09   | A inteligência artificial deve respeitar as permissões de acesso e não pode executar acções críticas autonomamente.                      |
| RN10   | As principais operações e execuções de automação devem ficar registadas para auditoria.                                                  |
| RN11   | Na primeira versão, as funcionalidades industriais devem ser testadas num ambiente simulado, sem controlo directo de equipamentos reais. |

## Âmbito da Primeira Versão

A primeira versão será desenvolvida e testada num ambiente industrial simulado. O foco estará na gestão de equipamentos e manutenção, na monitorização de eventos de cibersegurança, na automação de tarefas e na integração de inteligência artificial.

A integração com equipamentos industriais reais poderá ser considerada numa fase futura, após a implementação e validação dos mecanismos de segurança necessários.

