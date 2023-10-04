/*
 *
*/
workspace "Semantic Search" {

    model {

        group "Sytem" {

            internetBankingSystem = softwaresystem "Semantic Search" "Provides better experience for the Information Retrieval." {
                # containers
                embeddingModel = container "Embedding Model" "Generates vector embeddings with given text."
                
                searchClient = container "Search Application" "Search" "HTTP Client Program" "Web Browser"
                
                semanticSearchEngine = container "Semantic Search Engine" "Provides Internet banking functionality via a JSON/HTTPS API." "Java and Spring MVC" {
                    searchEngine = component "Search Engine Service"
                    embeddingService = component "Embedding Service" "Mediates handle vector embeddings."
                }
                knowledgin = container "Knowledgin" "" "Spring with JAVA" {
                    knowledgeGraphBuilder = component "Knowledge Graph Builder"
                }
                database = container "Graph Database" "Stores Knowledge Graph, each node has vector embeddings as property." "Neo4j" "Database"
            }
        }
        
        searchClient -> searchEngine "Requests search result with input text."
        
        searchEngine -> embeddingService "Gets vector mebeddings."
        embeddingService -> embeddingModel "Referes external model to infer."
        searchEngine -> database "Runs vector math to fetch the nodes"
        
        knowledgeGraphBuilder -> database "Stores Entities and Relationships extracted from Datasources"

    }

    views {

        component semanticSearchEngine "Components" {
            include *
            autoLayout
            description "The component diagram for the API Application."
        }

        styles {

            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Web Browser" {
                shape WebBrowser
            }
            element "Mobile App" {
                shape MobileDeviceLandscape
            }
            element "Database" {
                shape Cylinder
                fontSize 28
            }
            element "Component" {
                background #85bbf0
                color #000000
            }
        }
    }
}